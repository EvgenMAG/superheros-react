import React, { useState, useEffect } from 'react';
import s from './ModalForm.module.css';
import TextArea from '../TextField/TextField'
import InputField from '../InputField/InputField'
import InputFile from '../InputFile/InputFile'
import Button from '@mui/material/Button';

import apiFetch from '../../api-service/Api-service'

export default function HeroForm(props) {
    const { handleEdits, onClose, hero } = props
    const [nickname, setNickname] = useState('')
    const [realName, setRealName] = useState('')
    const [description, setDescription] = useState('')
    const [superpower, setSuperpower] = useState('')
    const [slogan, setSlogan] = useState('')
    const [images, setImages] = useState([])


    useEffect(() => {
        setNickname(props.hero.nickname)
        setRealName(props.hero.real_name)
        setDescription(props.hero.origin_description)
        setSuperpower(props.hero.superpowers)
        setSlogan(props.hero.catch_phrase)

    }, [])



    const handleChange = (event) => {
        const { name, value, files } = event.currentTarget;
        switch (name) {
            case "nickname":
                setNickname(value)
                break;
            case "realName":
                setRealName(value)
                break;
            case "description":
                setDescription(value)
                break;
            case "superpower":
                setSuperpower(value)
                break;
            case "slogan":
                setSlogan(value)
                break;
            case "images":
                {
                    const fileList = []
                    for (let i = 0; i < files.length; i++) {
                        fileList.push(files[i])

                    }

                    setImages(fileList)
                }
                break;
            default:
                console.log("Sorry, we don't have " + name + ".");

        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();

        formData.append("nickname", nickname);
        formData.append("real_name", realName);
        formData.append("origin_description", description);
        formData.append("superpowers", superpower);
        formData.append("catch_phrase", slogan);
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i])
        }

        apiFetch.updateHero(hero._id, formData).then(result => handleEdits(result.data))
        onClose()
        reset()
    }

    const reset = () => {
        setNickname("")
        setRealName("")
        setDescription("")
        setSuperpower("")
        setSlogan("")
        setImages([])

    };

    return (
        <form onSubmit={handleSubmit} className={s.form} encType="multipart/form-data">
            <InputField
                name={"nickname"}
                value={nickname}
                label={"Nickname"}
                handleChange={handleChange}
            />
            <InputField
                name={"realName"}
                value={realName}
                label={"Real Name"}
                handleChange={handleChange}
            />
            <TextArea
                name={"description"}
                value={description}
                label={"Origin Description"}
                handleChange={handleChange}

            />
            <TextArea
                name={"superpower"}
                value={superpower}
                label={"Superpower"}
                handleChange={handleChange}

            />
            <TextArea
                name={"slogan"}
                value={slogan}
                label={"Slogan"}
                handleChange={handleChange}

            />

            <InputFile
                name={"images"}
                type={"file"}
                label={"Images"}
                handleChange={handleChange}
            />
            <Button
                sx={{
                    fontWeight: "bold",
                }}
                variant="outlined"

                type="submit"
            >Create</Button>
        </form>
    );
};