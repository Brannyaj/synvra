// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (command: string, action: any, params?: any) => void;
  }
}

// Event Categories
export const EventCategory = {
  FORM: 'form_interaction',
  PAYMENT: 'payment_process',
  NAVIGATION: 'navigation',
  USER_ACTION: 'user_action'
} as const;

// Event Actions
export const EventAction = {
  // Form Steps
  FORM_START: 'form_start',
  FORM_STEP_1: 'form_step_1',
  FORM_STEP_2: 'form_step_2',
  FORM_STEP_3: 'form_step_3',
  FORM_COMPLETE: 'form_complete',
  
  // Form Fields
  FIELD_CHANGE: 'field_change',
  FIELD_ERROR: 'field_error',
  
  // Navigation
  NEXT_STEP: 'next_step',
  PREV_STEP: 'prev_step',
  
  // Payment
  PAYMENT_START: 'payment_start',
  PAYMENT_SUCCESS: 'payment_success',
  PAYMENT_ERROR: 'payment_error',
  
  // Get Started
  GET_STARTED_CLICK: 'get_started_click'
} as const;

interface AnalyticsEvent {
  category: typeof EventCategory[keyof typeof EventCategory];
  action: typeof EventAction[keyof typeof EventAction];
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  additionalParams?: {
    [key: string]: any;
  };
}

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = ({ 
  category, 
  action, 
  label, 
  value, 
  nonInteraction = false,
  additionalParams = {}
}: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
      ...additionalParams
    });
  }
};

/**
 * Track form step completion
 */
export const trackFormStep = (
  stepNumber: number, 
  formData: any, 
  isComplete: boolean = false
) => {
  const action = isComplete ? EventAction.FORM_COMPLETE : `form_step_${stepNumber}`;
  
  trackEvent({
    category: EventCategory.FORM,
    action: action as typeof EventAction[keyof typeof EventAction],
    label: `Step ${stepNumber}`,
    additionalParams: {
      step_number: stepNumber,
      service_type: formData.serviceType || 'not_selected',
      project_type: formData.projectType || 'not_selected',
      tier: formData.tier || 'not_selected',
      timeline: formData.timeline || 'not_selected',
      company_size: formData.companySize || 'not_selected',
      industry: formData.industry || 'not_selected'
    }
  });
};

/**
 * Track form field changes
 */
export const trackFieldChange = (
  fieldName: string, 
  value: string, 
  isValid: boolean = true
) => {
  trackEvent({
    category: EventCategory.FORM,
    action: EventAction.FIELD_CHANGE,
    label: fieldName,
    additionalParams: {
      field_name: fieldName,
      is_valid: isValid,
      field_value: value
    }
  });
};

/**
 * Track form validation errors
 */
export const trackFormError = (
  fieldName: string, 
  errorMessage: string
) => {
  trackEvent({
    category: EventCategory.FORM,
    action: EventAction.FIELD_ERROR,
    label: fieldName,
    additionalParams: {
      field_name: fieldName,
      error_message: errorMessage
    }
  });
};

/**
 * Track payment process
 */
export const trackPayment = (
  status: 'start' | 'success' | 'error',
  amount: number,
  error?: string
) => {
  const action = status === 'start' 
    ? EventAction.PAYMENT_START 
    : status === 'success'
    ? EventAction.PAYMENT_SUCCESS
    : EventAction.PAYMENT_ERROR;

  trackEvent({
    category: EventCategory.PAYMENT,
    action,
    value: amount,
    additionalParams: {
      payment_status: status,
      payment_amount: amount,
      error_message: error
    }
  });
};

/**
 * Track Get Started button click
 */
export const trackGetStarted = (source: string) => {
  trackEvent({
    category: EventCategory.USER_ACTION,
    action: EventAction.GET_STARTED_CLICK,
    label: source,
    additionalParams: {
      click_source: source
    }
  });
}; 