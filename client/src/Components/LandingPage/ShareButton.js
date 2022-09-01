import React from "react"
import { InlineShareButtons } from "sharethis-reactjs";
import "./LandingPage.css"

const ShareButton = () => {
    return (
      <div className="sharingButtons">
        <p>Share our map to your communities.</p>
        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            color: "social", // set the color of buttons (social, white)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            // labels: "cta", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "twitter",
              "facebook",
              "linkedin",
              "sms",
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            url: "https://gettheleadout.azurewebsites.net/", // (defaults to current url)
            image:
              "https://res.cloudinary.com/adelaney923/image/upload/v1661992891/Screen_Shot_2022-08-31_at_5.41.00_PM_xnlo5r.png", // (defaults to og:image or twitter:image)
            description: "Learn how to get rid of lead in your community ", // (defaults to og:description or twitter:description)
            title: "Do you know if you have lead pipes in your home?", // (defaults to og:title or twitter:title)
          }}
        />
      </div>
    );
}

export default ShareButton