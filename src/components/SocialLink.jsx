import '../css/social_link.css'

function SocialLink({ link, icon=null, arialabel }) {
  return (
    <a
      className="social_link"
      href={link}
      target="_blank"
      aria-label={`link to my ${ arialabel } profile`}
    >
      {icon} 
    </a>
  );
}

export default SocialLink;
