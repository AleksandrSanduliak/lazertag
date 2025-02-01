import contactsBcg from 'assets/contactsBcg.png';
import trainerPhoto from 'assets/trainerPhoto.png';
import React from 'react';
import cl from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section>
      <div className="contacts__container">
        <div className={cl.contactsInner}>
          <div className={cl.trainerPhoto}>
            <img
              className={cl.trainerPhoto}
              width="625"
              height="678"
              src={trainerPhoto}
              alt="Фото тренера"
            />
          </div>
          <div className={cl.trainerInfo}>
            <p className={cl.jobTitle}>
              Председатель Регионального отделения Всероссийской общественной организации развития
              лазерного боя «Федерация Лазертага России» в Санкт-Петербурге
            </p>
            <p className={cl.name}>РЯБЕНКО ДЕНИС ВИКТОРОВИЧ</p>
            <div className={cl.socialMediaContacts}>
              <p>
                <a href="tel:89999999999">89999999999</a>
              </p>
              <p className={cl.email}>
                <a href="mailto:lazertagooo@gmail.com">lazertagooo@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
