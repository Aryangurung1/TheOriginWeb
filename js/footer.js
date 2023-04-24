class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <footer>
        <!-- first part of footer -->
        <div class="first-footer">
          <div class="first-container-footer">
            <div class="subscribe-section">
              <h1>
                Subscribe Our Newsletter
              </h1>
              <p>
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui.
              </p>
            </div>
            <div class="placeholder_btn">
              <input
                type="text"
                placeholder="Enter your e-mail address..."
              />
              <button type="button" name="myButton">Get Started</button>
            </div>
          </div>
        </div>
  
        <!-- second part of footer -->
        <div class="contain">
          <div style="width: 400px; position: relative" class="inner-contain">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
              nemo deserunt. Nemo quis quisquam deleniti veritatis, voluptates
              voluptatum vitae!
            </p>
            <a
              href="https://www.facebook.com/people/The-Origin-Teams/100088433953540/?mibextid=ZbWKwL"
              target="_blank"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com/theoriginteams/?igshid=Yzg5MTU1MDY%3D"
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div style="position: relative; top: 30px" class="one">
            <h3>Navigation</h3>
            <ol>
              <li class="aa"><a href="#">Home</a></li>
              <li class="aa"><a href="#">Services</a></li>
              <li class="aa"><a href="#">Contact</a></li>
              <li class="aa"><a href="#">About</a></li>
            </ol>
          </div>
          <div style="position: relative; top: 30px" class="one">
            <h3>Contacts</h3>
            <div
              style="
                width: 200px;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
              "
            >
              <i class="fa-solid fa-square-phone"></i>
              <div
                style="
                  margin-left: 10px;
                  position: relative;
                  left: 50px;
                  bottom: 40px;
                "
              >
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
                style="
                  margin-left: 10px;
                  position: relative;
                  left: 50px;
                  bottom: 40px;
                "
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

window.customElements.define('page-footer',FooterElement);