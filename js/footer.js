class FooterElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      `
        <footer>
        <!-- first part of footer -->
        <div class="first-footer" id="footer">
          <div class="first-container-footer">
            <div class="subscribe-section">
              <h1>
                Subscribe Our Newsletter
              </h1>
              <p>
              Subscribe to our newsletter and stay updated with the latest insights and offerings
              </p>
            </div>
            <div class="placeholder_btn">
              <input
                type="text"
                placeholder="Enter your e-mail address..."
              />
              <button type="button" name="myButton">Suscribe</button>
            </div>
          </div>
        </div>
  
        <!-- second part of footer -->
        <div class="contain" style="box-sizing: content-box;">
          <div style="position: relative" class="inner-contain">
            <img src="../img/originlogo.png" style="height: auto; width: 200px" />
            <p
              style="
                color: #ffffffc4;
                line-height: 30px;
                position: relative;
                font-family: 'DM Sans', sans-serif;
                font-size: 16px;
                margin-top: 20px;
              "
            >
            A leading provider of cutting-edge solutions in the tech industry. With a strong focus on innovation and client satisfaction, we deliver top-notch services to help businesses thrive in the digital age.
            </p>
            <a
              href="#"
              onclick="redirectSocialsTo('facebook')"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="#"
              onclick="redirectSocialsTo('instagram')"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a href="#" onclick="redirectSocialsTo('linkedin')" ><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div style="position: relative; top: 30px" class="one">
            <h3>Navigation</h3>
            <ul style="list-style: none; padding:0px">
              <li class="aa"><a href="#" onclick="redirectTo('home')" onMouseOver="this.style.color='#8d38ed'" onMouseOut="this.style.color='white'" >Home</a></li>
              <li class="aa"><a href="#" onclick="redirectTo('service')" onMouseOver="this.style.color='#8d38ed'" onMouseOut="this.style.color='white'">Services</a></li>
              <li class="aa"><a href="#" onclick="redirectTo('contact')" onMouseOver="this.style.color='#8d38ed'" onMouseOut="this.style.color='white'">Contact</a></li>
              <li class="aa"><a href="#" onclick="redirectTo('about')" onMouseOver="this.style.color='#8d38ed'" onMouseOut="this.style.color='white'">About</a></li>
            </ul>
          </div>
          <div style="position: relative; top: 30px" class="one">
            <h3>Contacts</h3>
            <div            >
              <i class="fa-solid fa-square-phone"></i>
              <div              >
                <h4
                  style="
                    color: white;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  Phone
                </h4>
                <p
                  style="
                    color: white;
                    margin-top: 5px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 16px;
                  "
                >
                  +977 9800526407
                </p>
              </div>
              <i class="fa-solid fa-square-envelope"></i>
              <div

              >
                <h4
                  style="
                    color: white;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                  "
                >
                  Email
                </h4>
                <p
                  style="
                    color: white;
                    margin-top: 5px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 16px;
                  "
                >
                  admin@theoriginteams.com
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- third part of footer -->
        <div class="footer-third-part">
          <p>
            © 2023 · The Origin Teams
          </p>
        </div>
      </footer> 
        `
  }
}

window.customElements.define('page-footer', FooterElement);
