import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBarInApp from "../../Component/Auth/NavBar/NavBarInApp";
import actionTypes from "../../State/actions/actionTypes";

const OccasionPersons = () => {
    const dispatch = useDispatch();
    const { names, occasionType } = useSelector((state) => state);
    const navigate = useNavigate();

    // const [dataCheck, setDataCheck] = useState(false);
    const [formValues, setFormValues] = useState([
        { first_name: "", last_name: "", id: new Date().getTime() },
    ]);

    useEffect(() => {
        if (!occasionType) {
            navigate("/startOccasion");
        }
    }, []);

    useEffect(() => {
        if (names?.length > 0) {
            setFormValues(names);
        }
    }, [names]);

    let handleChange = (i, e) => {
        const { name, value } = e.target;
        let newFormValues = formValues.map((formValue) => {
            if (formValue.id === i) {
                return {
                    ...formValue,
                    [name]: value,
                };
            } else return formValue;
        });
        setFormValues(newFormValues);
    };
    
    let addNewPerson = () => {
        setFormValues([
            ...formValues,
            { first_name: "", last_name: "", id: new Date().getTime() },
        ]);
    };

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };

    let submitOccasionPerson = () => {
        if (
            formValues
                .map((first_name) => first_name.first_name)
                .includes("") ||
            formValues.map((last_name) => last_name.last_name).includes("")
        ) {
            // alert("all name fields are mandatory");
            toast.error("all name fields are mandatory", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            dispatch({
                type: actionTypes.ADD_PERSON_NAME,
                payload: formValues,
            });
           
            navigate("/occasionDate");
        }
    };
    let submitOccasionPersonWhileBack = () => {
        dispatch({ type: actionTypes.ADD_PERSON_NAME, payload: formValues });
        
    };

    return (
        <div>
            <div>
                <div className="Toastify" />
                <NavBarInApp />
                <div className="page occassion">
                    <section>
                        <div className="steps">
                            <div>
                                <span
                                    className="dots"
                                    style={{
                                        backgroundImage:
                                            'url("assets/images/tick-white.d30d9e05.svg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                />
                                <span
                                    className="dots"
                                    style={{
                                        backgroundImage:
                                            'url("assets/images/tick-white.d30d9e05.svg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                />
                                <span className="dots dots-active" />
                                <span className="dots" />
                            </div>
                        </div>
                        <div className="font-30 bold title">
                            Who is the {occasionType} for?
                        </div>

                        {formValues.map((element, index) => (
                            <div className="each-person item" key={index}>
                                <div className="double-container">
                                    <div className="text-input full-input">
                                        {/* <div className="label undefined"> */}
                                        <label>First Name</label>
                                        {/* <a className="link" href>
                                                <div />
                                            </a> */}
                                        <input
                                            type="name"
                                            value={element?.first_name}
                                            onChange={(e) =>
                                                handleChange(element.id, e)
                                            }
                                            placeholder="ex. Ms. Jane"
                                            name="first_name"
                                            required
                                            className="bg-2 bg-2-fx txt-input2"
                                        />
                                        <div />
                                    </div>
                                    <div className="text-input full-input">
                                        {/* <div className="label undefined"> */}
                                        <div>
                                            <label>Last Name</label>
                                            {/* <a className="link" href>
                                                <div />
                                            </a> */}
                                        </div>
                                        <input
                                            type="name"
                                            name="last_name"
                                            value={element?.last_name}
                                            onChange={(e) =>
                                                handleChange(element.id, e)
                                            }
                                            required
                                            className="bg-2 bg-2-fx txt-input2"
                                        />
                                        <div />
                                    </div>
                                </div>
                                {index > 0 ? (
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-4 bg-4-fx bold btn2"
                                            onClick={() =>
                                                removeFormFields(index)
                                            }
                                        >
                                            <div>
                                                <img
                                                    src="assets/images/delete.d650400d.svg"
                                                    alt="button"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                        <div className="add item">
                            <button
                                type="button"
                                className="bg-4 bold"
                                onClick={(e) => addNewPerson()}
                            >
                                <div>+ Add Another Person</div>
                            </button>
                        </div>
                    </section>
                    <div className="page3 button-container bg-white">
                        <div className="double-container">
                            <div>
                                <button className="bg-none bold full-input">
                                    <div
                                        onClick={() => {
                                            navigate(-1),
                                                submitOccasionPersonWhileBack();
                                        }}
                                    >
                                        Back
                                    </div>
                                </button>
                            </div>
                            {/* <Link to="/occasionDate"> */}
                            <button
                                onClick={() => submitOccasionPerson()}
                                className="bg-3 bold color-white full-input"
                                type="submit"
                            >
                                Next
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionPersons;
