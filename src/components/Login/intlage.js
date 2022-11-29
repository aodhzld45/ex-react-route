import { FormattedMessage } from "react-intl";
import IntlLoginForm from "./IntlLoginForm";

function IntlPage() {
    return (
        <main>
            <IntlLoginForm />
            <p>
            <FormattedMessage
            id="info"
            defaultMessage="메세지를 찾을 수 없습니다. (locale: {locale})"
            values={{ locale: localStorage.getItem("locale") }}      
            />
            </p>          
        </main>
    );
}

export default IntlPage;