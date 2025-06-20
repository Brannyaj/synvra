import { NextResponse } from 'next/server';
import { SignatureRequestApi, SignatureRequestCreateEmbeddedWithTemplateRequest } from '@dropbox/sign';

const signatureRequestApi = new SignatureRequestApi();
signatureRequestApi.username = process.env.DROPBOX_SIGN_API_KEY!;

export async function POST(request: Request) {
  try {
    const { 
      fullName,
      email,
      companyName,
      phone,
      serviceType,
      projectType,
      tier,
      timeline,
      totalAmount,
      depositPaid,
      projectDescription
    } = await request.json();

    const data: SignatureRequestCreateEmbeddedWithTemplateRequest = {
      templateIds: [process.env.DROPBOX_SIGN_TEMPLATE_ID!],
      subject: 'Project Services Agreement',
      message: 'Please review and sign the project services agreement.',
      signers: [
        {
          role: 'Client',
          emailAddress: email,
          name: fullName,
        }
      ],
      customFields: [
        { name: 'full_name', value: fullName },
        { name: 'company_name', value: companyName },
        { name: 'email', value: email },
        { name: 'phone', value: phone },
        { name: 'service_type', value: serviceType },
        { name: 'project_type', value: projectType },
        { name: 'tier', value: tier },
        { name: 'timeline', value: timeline },
        { name: 'total_amount', value: totalAmount.toString() },
        { name: 'deposit_paid', value: depositPaid.toString() },
        { name: 'remaining_balance', value: (totalAmount - depositPaid).toString() },
        { name: 'deposit_deducted', value: depositPaid.toString() },
        { name: 'project_description', value: projectDescription }
      ],
      clientId: process.env.DROPBOX_SIGN_CLIENT_ID!,
      testMode: process.env.NODE_ENV === 'development'
    };

    const result = await signatureRequestApi.signatureRequestCreateEmbeddedWithTemplate(data);
    const signatureRequest = result.body.signatureRequest;

    if (!signatureRequest) {
      throw new Error('Signature request not found in response');
    }

    const firstSigner = signatureRequest.signatures?.[0];
    if (!firstSigner?.sign_url) {
      throw new Error('Sign URL not found for the first signer');
    }
    
    return NextResponse.json({ 
      success: true,
      signatureRequestId: signatureRequest.signatureRequestId,
      signingUrl: firstSigner.sign_url
    });
  } catch (error) {
    console.error('Error creating signature request:', error);
    return NextResponse.json(
      { error: 'Failed to create signature request' },
      { status: 500 }
    );
  }
} 