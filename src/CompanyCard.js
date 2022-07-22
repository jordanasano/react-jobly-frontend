import "./CompanyCard.css";
/** To render company details.
 *
 *  Props:
 *    - name, logo, description
 *
 *  No state.
 *
 *  CompanyList -> CompanyCard
 */
//TODO: CompanyCard-container -> CompanyCard
function CompanyCard({ name, logo, description }) {
  return (
    <div className="CompanyCard-container">
      <p>{name}</p>
      <p>{description}</p>
      {logo !== null && <img src={logo} alt={`${name} logo`} />}
    </div>
  );
}

export default CompanyCard;
