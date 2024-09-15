import Link from 'next/link';
import React from 'react';
import normaliseURL from '~/server/normaliseURL';
import { chemistryTopics, physicsTopics } from '~/server/topics';

const PhysPage: React.FC = () => {
    return (
        <div>
            In progress
            {/* <h1 style={{ fontSize: '2em', color: '#333', textAlign: 'center' }}>Physics Page</h1>
            <p style={{ fontSize: '1.2em', color: '#666', textAlign: 'center' }}>Welcome to the physics page!</p>

            <div>
                {chemistryTopics.map((module) => {
                    // extract the number of out module
                    const moduleNumber = module.match(/\d+/g);
                    return (
                        <Link
                            key={module}
                            href={`chem/${moduleNumber}`}
                            style={{
                                margin: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                display: 'inline-block',
                                textAlign: 'center'
                            }}
                        >
                            {module}
                        </Link>
                    );
                })}
            </div> */}
        </div>
    );
};

export default PhysPage;