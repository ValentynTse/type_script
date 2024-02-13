import { EmailValidator as EmailV } from './03-export-statement';
class EmailValidator {
    validate() {
        return true;
    }
}
const x = new EmailV();
const y = new EmailValidator();
