# Tawk.to Integration Setup Guide

## 🚀 Quick Setup Steps

### Step 1: Create Tawk.to Account
1. Go to [tawk.to](https://www.tawk.to)
2. Sign up for a free account
3. Create a new property for your website
4. Copy your **Property ID** (looks like: `5f8a1b2c3d4e5f6g7h8i9j0k`)

### Step 2: Update Your Code
1. Open `frontend/src/components/CustomLiveChat.tsx`
2. Find line with: `script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/1hqr8k8k8';`
3. Replace `YOUR_PROPERTY_ID` with your actual Property ID from Tawk.to
4. Replace `1hqr8k8k8` with your actual default widget ID from Tawk.to

### Step 3: Customize Tawk.to Widget (Optional)
In your Tawk.to dashboard:
- **Appearance**: Match your brand colors
- **Behavior**: Set online/offline messages
- **Triggers**: Configure when widget appears
- **Pre-chat**: Customize greeting messages

### Step 4: Mobile App Setup
1. Download **Tawk.to** mobile app (iOS/Android)
2. Login with your account
3. Enable push notifications
4. You'll now get instant notifications when users start chats!

## 🎯 How It Works

### For Users:
1. Uses your beautiful custom chat for service inquiries
2. Clicks "Speak with Agent" when ready for live help
3. Tawk.to widget opens for real-time conversation
4. Gets immediate responses from you!

### For You (Agent):
1. Get instant notifications on your phone
2. Respond through mobile app or web dashboard
3. Full chat history and user information
4. Professional live chat experience

## 📱 Agent Response Options

### Mobile App (Recommended)
- **Instant notifications** when users connect
- **Quick responses** on-the-go
- **Chat history** and user details
- **Offline messages** handled automatically

### Web Dashboard
- **Real-time chat interface**
- **Multiple chat management**
- **File sharing capabilities**
- **Advanced analytics**

## 🔧 Testing Your Setup

1. Deploy your updated code
2. Visit your website
3. Open the chat widget
4. Click "Speak with Agent"
5. Tawk.to widget should appear
6. Test sending a message
7. Check if you receive notification on your phone/email

## 🎨 Customization Tips

### Hide Tawk.to Widget by Default
The integration is set to hide Tawk.to widget initially and only show it when users click "Speak with Agent". This maintains your custom chat experience.

### Brand Consistency
- Set Tawk.to widget colors to match your brand
- Customize greeting messages
- Set your photo and name as the agent

### Notifications
- Enable email notifications for new chats
- Set up SMS alerts for urgent messages
- Configure offline message handling

## 🚀 Go Live!

Once you've:
1. ✅ Updated your Property ID in the code
2. ✅ Deployed the changes
3. ✅ Downloaded the mobile app
4. ✅ Tested the integration

You're ready to start responding to live chats immediately!

Your users will love the seamless experience of exploring services through your custom chat, then getting instant live support when they need it. 