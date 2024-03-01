import Footer from "../components/Footer"
import Header from "../components/Header"
import Slide from "../components/Slide"
import Transition from "../components/Transition"

function Terms() {
  return (
    <>
    <Header/>
    <Transition>
    <section className="terms-section">
      <Slide>
        <div className="textual-head">
            <h1>terms and conditions</h1>
        </div>
        </Slide>
        <div className="terms-body">
            <h3>Welcome to Codecafé!</h3>
            <p>These terms and conditions outline the rules and regulations for the use of Codecafé's Website, located at https://thecodecafe.co/.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Codecafé if you do not agree to take all of the terms and conditions stated on this page.</p>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Delaware, United States. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

            <h3>Cookies</h3>
            <p>We employ the use of cookies. By accessing Codecafé, you agreed to use cookies in agreement with the Company Name's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h3>License</h3>
            <p>Unless otherwise stated, Codecafé and/or its licensors own the intellectual property rights for all material on Codecafé. All intellectual property rights are reserved. You may access this from Codecafé for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul>
                <li>Republish material from Codecafé</li>
                <li>Sell, rent or sub-license material from Codecafé</li>
                <li>Reproduce, duplicate or copy material from Codecafé</li>
                <li>Redistribute content from Codecafé</li>
            </ul>
        </div>
    </section>
    </Transition>
    <Footer/>
    </>
  )
}

export default Terms