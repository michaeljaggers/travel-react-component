import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'

const PolicyCard = (props) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <Card className={`policy-card ${active ? 'active' : ''}`} onClick={toggleActive}>
            <Card.Body>
                <div className={'card-left'}>
                    <div className={'card-top'}>
                        <Button
                            className={'card-button'}
                            onClick={toggleActive}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                        <div className={'card-title-section'}>
                            <div className={'title'}>{props.title}</div>
                            <div className={'description-wrapper'}>
                                <div className={'id'}>{props.id}</div>
                                <div className={'divider-vert-sm'}></div>
                                <div className={'desc'}>{props.description}</div>
                            </div>
                        </div>
                    </div>
                    <div className={'card-bottom'}>
                        <div className={'payment_date'}>
                            {/* {props.payment_date} */}17-APR-2018<br/>
                            <p className={'payment_date_title'}>Payment date</p>
                        </div>
                        <div className={'divider-vert-md'}></div>
                        <div className={'coverage_date'}>
                            {props.coverage_start_date} to {props.coverage_end_date}<br/>
                            <p className={'coverage_date_title'}>Coverage dates</p>
                            {
                                props.status === "active"
                                ? <div className={'status active'}>
                                {props.status}
                                <FontAwesomeIcon className={'status-icon'} icon={faCircle}/>
                                </div>
                                : <div className={'status expired'}>
                                {props.status}
                                <FontAwesomeIcon className={'status-icon'} icon={faCircle}/>
                                </div>
                            }
                        </div>
                        <div className={'divider-vert-md'}></div>
                        <div className={'price_premium'}>
                            {props.premium_formatted}<br/>
                            <p className={'price_premium_title'}>Price/Premium</p>
                        </div>
                        {
                            props.renewal !== null
                            ? <>
                                <div className={'divider-vert-md'}></div>
                                <div className={'renewal'}>
                                    {props.renewal}<br/>
                                    <p className={'renewal_title'}>Renewal</p>
                                </div>
                            </>
                            : null
                        }
                    </div>
                </div>
                <div className={'card-right'}>
                    <div className={'logo-container'}>
                        <img className={'logo'} src={props.partner_logo} alt="Partner Logo"/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PolicyCard;
