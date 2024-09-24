import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist.js";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const messages = {
  'es-ES': localeEsMessages,
  'es': localeEsMessages,
  'en-US': localeEnMessages,
  'en': localeEnMessages
};

const browserLanguage = navigator.language;
console.log(browserLanguage)
const locale = messages[browserLanguage] ? browserLanguage : 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
