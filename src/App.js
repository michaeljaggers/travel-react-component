import React, { useState, useEffect } from 'react';
import PolicyCard from "./components/PolicyCard/PolicyCard";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const URL = 'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking';

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            const {policies} = data
            setData(policies);
        })
        .catch((e) => {
            setLoading(false);
            setError('Fetch Failed');
        });
    }, []);
    
    if (loading) {
        return <p>loading...</p>
    }

    if (error !== '') {
        return <p>Error: {error}</p>
    }

    if (data.length) {
        return (
            <Container>
                <h1 className={'page-title'}>Your Policies</h1>
                { data.map(policy =>
                        <PolicyCard 
                            key={policy.id}
                            id={policy.id}
                            type={policy.type}
                            title={policy.title}
                            description={policy.description}
                            status={policy.status}
                            premium={policy.premium}
                            premium_formatted={policy.premium_formatted}
                            payment_date={policy.payment_date}
                            coverage_start_date={policy.coverage_start_date}
                            coverage_end_date={policy.coverage_start_date}
                            renewal={policy.renewal}
                            partner_id={policy.partner.id}
                            partner_name={policy.partner}
                            partner_logo={policy.partner.logo}
                        />
                    )
                }
            </Container>
        )
    } else {
        return null;
    }
}

export default App;
