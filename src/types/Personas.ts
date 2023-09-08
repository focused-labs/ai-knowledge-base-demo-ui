export const personas: Record<string, IPersona> = {
  ANY_ROLE: {
    label: 'Any Role',
    value: 'human',
    promptIdeas: [
      'What companies has Focused Labs worked with?',
      'Tell me a brief history of Focused Labs',
      'What are Focused Labs core values?'
    ]
  },
  POTENTIAL_EMPLOYEE: {
    label: 'Potential Employee',
    value: 'potential employee',
    promptIdeas: [
      'What is the company culture like?',
      'What does a typical day look like?',
      'What kinds of projects would I be working on?'
    ]
  },
  POTENTIAL_CUSTOMER: {
    label: 'Potential Customer',
    value: 'potential customer',
    promptIdeas: [
      'What are Focused Labs rates?',
      'What does Focused Labs process look like?',
      "I have an idea but don't know where to start. How can Focused Labs help?"
    ]
  }
};

export interface IPersona {
  label: string;
  value: string;
  promptIdeas: string[];
}

export const getPersona = (personaValue: string) => {
  if (personaValue === personas.POTENTIAL_EMPLOYEE.value) {
    return personas.POTENTIAL_EMPLOYEE;
  }
  if (personaValue !== personas.POTENTIAL_CUSTOMER.value) {
    return personas.ANY_ROLE;
  }
  return personas.POTENTIAL_CUSTOMER;
};
