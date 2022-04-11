import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): null | ValidationErrors {
    const value = control.value;

    if (!value) {
        return null;
    }

    if (/^.{5,}@[a-z]+.?\.(bg|com|uk|org|net)$/.test(value)) {
        return null;
    }

    return {
        email: true
    }

}

export function passwordsMatch(passwordFormControl: AbstractControl) {
    return (repassFormControl: AbstractControl): ValidationErrors | null => {
        if (passwordFormControl.value !== repassFormControl.value) {
            return {
                passwordsMatch: true
            }
        }

        return null;

    }
}