import React from "react";
import { Helmet } from "react-helmet";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import Navbar from "../../Layout/Navbar";

const PrivacyPolicy = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-container">
                    <section>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8">
                                    <article>
                                        <div className="article__title text-center">
                                            <h1 className="h2">
                                                Privacy and Cookie Policy
                                            </h1>
                                            <span>
                                                Last Update: May 15, 2021
                                            </span>
                                        </div>
                                        <div className="article__body">
                                            <p>
                                                We respect your privacy. This
                                                Privacy Policy describes how
                                                your personal information is
                                                collected, used, and shared when
                                                you visit app.u-greet.com (the
                                                “Site”).
                                            </p>
                                            <h3>
                                                Information Collection, Use, and
                                                Sharing
                                            </h3>
                                            <p>
                                                We are the sole owners of the
                                                information collected on this
                                                site. We only have access to
                                                and/or collect information that
                                                you voluntarily give us. We will
                                                not sell or rent this
                                                information to anyone. We do not
                                                track cookies. We will use your
                                                information to respond to you
                                                regarding the reason you
                                                contacted us. We will not share
                                                your information with any third
                                                party outside of our
                                                organization, other than as
                                                necessary to fulfill your
                                                request.
                                            </p>
                                            <p>
                                                However, by creating an account,
                                                we collect and store the
                                                following data:
                                            </p>
                                            <p>
                                                If you are a contributor to a
                                                project, we collect your data in
                                                these ways: TDB If you are a
                                                visitor to our site, the
                                                following data is collected by
                                                your use of the website: TDB
                                            </p>
                                            <p>
                                                Your Access to and Control Over
                                                Information You may opt out of
                                                any future contacts from us at
                                                any time. You can do the
                                                following at any time by
                                                contacting us via the email
                                                address or phone number given on
                                                our website: See what data we
                                                have about you, if any.
                                                Change/correct any data we have
                                                about you. Have us delete any
                                                data we have about you. Express
                                                any concern you have about our
                                                use of your data.
                                            </p>
                                            <p>
                                                Security We take precautions to
                                                protect your information. When
                                                you submit sensitive information
                                                via the website, your
                                                information is protected both
                                                online and offline. Wherever we
                                                collect sensitive information
                                                that information is encrypted
                                                and transmitted to us in a
                                                secure way. You can verify this
                                                by looking for a lock icon in
                                                the address bar and looking for
                                                "https" at the beginning of the
                                                address of the Web page. While
                                                we use encryption to protect
                                                sensitive information
                                                transmitted online, we also
                                                protect your information
                                                offline. Only employees who need
                                                the information to perform a
                                                specific job (for example,
                                                billing or customer service) are
                                                granted access to personally
                                                identifiable information.
                                            </p>
                                            <p>
                                                Changes We may update this
                                                privacy policy from time to time
                                                in order to reflect, for
                                                example, changes to our
                                                practices or for other
                                                operational, legal or regulatory
                                                reasons. Contact Us For more
                                                information about our privacy
                                                practices or if you have
                                                questions, please contact us by
                                                e-mail at hello@u-greet.com , by
                                                phone at [add] or, via mail
                                                using the details provided
                                                below: [address]
                                            </p>
                                            <p>
                                                Videos are reviewed for quality
                                                assurance and to ensure
                                                adherence to our terms and
                                                conditions …… ADD TERMS AND
                                                CONDITION RE VIDEO FINALIZATION
                                                PROCESS
                                            </p>
                                            <p>
                                                NEED TO ADD PROVISIONS RELATED
                                                TO EUROPEAN LAWS
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <FooterWebsite />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
