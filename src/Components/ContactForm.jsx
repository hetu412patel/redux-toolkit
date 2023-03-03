import React from 'react'

const ContactForm = () => {

    return (
        <div className="container">
            <form>
                <label>Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." required/>

                <label>Email Address</label>
                <input type="text" id="email" name="email" placeholder="Your email.." required/>

                <label for="subject">Give Your Feedback</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }} required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactForm