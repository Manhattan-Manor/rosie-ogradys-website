import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { Country } from '../../classes/Country';
import Swal from 'sweetalert2';
import "../../assets/styles/PersonalInfoFields.scss";
const PersonalInfoFields = ({ formData, handleInputChange }: any) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedCountries = await Country.getAll();
        setCountries(fetchedCountries);
        setFilteredCountries(fetchedCountries);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          text: 'error.loading-countries',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: any) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchValue(event.target.value);
    setFilteredCountries(countries.filter((country) => country.name.toLowerCase().includes(searchValue)));
    setShowDropdown(true);
  };

  const handleCountrySelect = (countryId: number, countryName: string) => {
    handleInputChange({ target: { name: 'countryId', value: countryId } });
    setSearchValue(countryName);
    setShowDropdown(false);
  };

  if (loading) {
    return (
      <div className="spinner-container flex-column">
        <div className="spinner"></div>
        <span className="mt-3">{i18next.t('please-wait')}</span>
      </div>
    );
  }

  return (
    <>
      {['firstname', 'middleInitial', 'lastName', 'email', 'mobilePhone', 'city', 'state', 'zipcode', 'countryId'].map((field, index) => (
        <div className="col-12" key={index}>
          {field === 'countryId' ? (
            <div className="position-relative">
              <label htmlFor={field} className="form-label mt-3">
                {i18next.t(`tickets.general-step.1.form.${field}`)}
              </label>
              <input
                type="text"
                className="form-control select.input.form-control"
                name={field}
                value={searchValue}
                onChange={handleSearchChange}
                autoComplete='nope'
                placeholder={i18next.t('tickets.general-step.1.form.select-country') || ''}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              {showDropdown && (
                <ul className="custom-select-dropdown">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <li
                        key={country.id}
                        onClick={() => handleCountrySelect(country.id, country.name)}
                        className="custom-select-option"
                      >
                        {country.name}
                      </li>
                    ))
                  ) : (
                    <li className="custom-select-option">{i18next.t('no-results-found')}</li>
                  )}
                </ul>
              )}
            </div>
          ) : (
            <>
              <label htmlFor={field} className="form-label">
                {i18next.t(`tickets.general-step.1.form.${field}`)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={i18next.t(`tickets.general-step.1.form.${field}`) || ''}
                required={field !== 'middleInitial'}
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default PersonalInfoFields;
