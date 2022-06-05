import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Modal from '../Components/Modal/Modal';
import ModalForm from '../Components/ModalForm/ModalForm'
import Loader from '../Components/Loading/Loader'
import apiFetch from '../api-service/Api-service'

import s from './HeroDetailsPage.module.css';
import basket from '../img/basket3.png'
import pensil from '../img/edit.png'
import poster from '../img/MAKS.jpg';


export default function HeroDEtailsPage() {
    let params = useParams()
    let navigate = useNavigate()
    const [hero, setHero] = useState('')
    const [showModal, setShowModal] = useState(false)

    console.log(params)

    useEffect(() => {
        apiFetch.getHero(params.heroId).then(({ data }) => {
            setHero(data.hero)
        })

    }, [])


    const handleGoBackBtn = () => {
        navigate("/", { replace: true })
    };

    const hadleClick = (id) => {
        apiFetch.deleteHeroImage(hero._id, id).then(({ data }) => {
            setHero(data.contact)
        })
    }

    const handleDeleteBtn = (hero) => {
        apiFetch.deleteHero(hero)
        navigate("/", { replace: true })

    }

    const togleModal = () => {
        setShowModal(!showModal);
    };

    const handleEditBtn = () => {
        togleModal();
    };
    const handleEditForm = (data) => {
        setHero(data.hero)

    };

    let hide
    if (showModal) {
        hide = { pointerEvents: 'none' }
    }
    return (
        <>
            {!hero ? <Loader /> :
                <div div style={hide} >
                    <nav className={s.navigation}>
                        <button
                            type="button"
                            onClick={handleGoBackBtn}
                            className={s.buttonBack}
                        >
                            Go Back
                        </button>{' '}
                        <div className={s.containerBtn}>
                            <button
                                type="button"
                                onClick={() => handleDeleteBtn(hero._id)}
                                className={s.buttonDeleteEdit}
                            >
                                <img className={s.icons} alt="" src={basket} />
                            </button>{' '}
                            <button
                                type="button"
                                onClick={() => handleEditBtn()}
                                className={s.buttonDeleteEdit}
                            >
                                <img className={s.icons} alt="" src={pensil} />
                            </button>{' '}
                        </div>

                    </nav>
                    <div className={s.containerHeroPage}>
                        {hero.images && (
                            <div className={s.containerPicture}>
                                <img
                                    className={s.heroPicture}
                                    src={hero.images[0] ? hero.images[0].image : poster}
                                    alt={hero.nickname}
                                />
                            </div>

                        )}
                        <div className={s.containerMovieDescr}>
                            <div className={s.containerTitle}>
                                <h2 className={s.heroTitle}>Nickname:</h2>
                                <p className={s.heroTitle}>{hero.nickname}</p>
                            </div>
                            <div className={s.containerTitle}>
                                <h3 className={s.heroTitle}>Real Name:</h3>
                                <p className={s.heroTitle}>{hero.real_name}</p>
                            </div>
                            <div className={s.containerTitle}>
                                <h3 className={s.heroTitle}>Description:</h3>
                                <p className={s.heroTitle}>{hero.origin_description}</p>
                            </div>
                            <div className={s.containerTitle}>
                                <h3 className={s.heroTitle}>Superpowers:</h3>
                                <p className={s.heroTitle}>{hero.superpowers}</p>
                            </div>
                            <div className={s.containerTitle}>
                                <h3 className={s.heroTitle}>Catchphrases:</h3>
                                <p className={s.heroTitle}>{hero.catch_phrase}</p>
                            </div>
                        </div>

                    </div>
                    <div className={s.containerImages}>
                        {hero && hero.images.map(item =>
                            <div key={item._id} className={s.containerImage}>
                                <img
                                    className={s.heroImage}
                                    src={item.image}
                                    alt={hero.nickname}
                                />
                                <img className={s.deleteImg} alt="" src={basket} onClick={() => hadleClick(item._id)} />
                            </div>
                        )}

                    </div>
                    <div>
                    </div>
                    {
                        showModal && (
                            <Modal onClose={togleModal}>
                                <ModalForm hero={hero} onClose={togleModal} handleEdits={handleEditForm} />
                            </Modal>
                        )
                    }
                </div >
            }
        </>


    );
}

