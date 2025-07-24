// components2/organisms/Sidebar.jsx
import Divider from '../atoms/Divider';
import ContactInfo from '../molecules/ContactInfo';
import SocialLink from '../molecules/SocialLink';
import LanguageItem from '../molecules/LanguageItem';

const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="profile-header">
        <img 
          src="/photos/avatar.jpg" 
          alt="Angelo Libero" 
          className="avatar"
        />
        <h1 className="name">Alexsey Besanets</h1>
        <p className="role">Full-Stack Designer</p>
      </div>
      
      <div className="quote">
        People ignore design that ignore people.
        <p className="quote-author">Frank Kimero</p>
      </div>
      
      <Divider />
      
      <div className="info-section">
        <ContactInfo 
          iconName="/photos/contact/email.png"
          label="Email" 
          value="angelo.libero@gmail.com" 
        />
        <ContactInfo 
          iconName="/photos/contact/website.png" 
          label="Website" 
          value="https://aldesign.it" 
        />
        <ContactInfo 
          iconName="/photos/contact/phone.png"  
          label="Phone" 
          value="(+39) 333 0123 765" 
        />
        <ContactInfo 
          iconName="/photos/contact/location.png"  
          label="Address" 
          value="Bologna, Italy" 
        />
      </div>
      
      <Divider />
      
      <div className="info-section">
        <p className="info-label">Socials</p>
        <SocialLink platform="instagram" username="angelolibero.designs" image="/photos/socials/insta.png"/>
        <SocialLink platform="dribbble" username="angelolibero-designs" image="/photos/socials/dribble.png"/>
        <SocialLink platform="twitter" username="angeloldesigns" image="/photos/socials/twitter.png"/>
        <SocialLink platform="linkedin" username="angelo-libero-a42a0438" image="/photos/socials/linkedin.png"/>
      </div>
      
      <Divider />
      
      <div className="info-section">
        <p className="info-label">Languages</p>
        <LanguageItem language="Italian" level="Native" image="/photos/flags/italian.png"/>
        <LanguageItem language="Greek" level="Native" image="/photos/flags/greek.png"/>
        <LanguageItem language="English" level="Professional working" image="/photos/flags/english.png"/>
        <LanguageItem language="Spanish" level="Elementary" image="/photos/flags/spanish.png"/>
      </div>
    </aside>
  );
};

export default Sidebar;