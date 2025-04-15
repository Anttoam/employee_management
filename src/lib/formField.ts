export class BaseField {
  constructor(
    public name: string, 
    public label: string, 
    public placeholder?: string, 
    public required?: boolean 
  ) {}
}

export class charField extends BaseField {
  type: string = 'text'
}

export class emailField extends BaseField {
  type: string = 'email';
}
export class passwordField extends BaseField {
  type: string = 'password';
}
