/** To render company details.
 *
 *  Props:
 *    - name, logo, description
 *
 *  No state.
 *
 *  CompanyList -> CompanyCard
 */

function CompanyCard({ name, logo, description }) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      {logo !== null && <img src={logo} alt={`${name} logo`} />}
    </div>
  );
}

export default CompanyCard;
