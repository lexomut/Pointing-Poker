import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../api/memberInfo';
import styles from './ScramMaster.module.css';
import MemberCard from '../MemberCard';
import { IMemberCard } from '../../types';

const ScramMaster: () => JSX.Element = () => {
    const [data, setData] = useState<IMemberCard>();

    useEffect(() => {
        const getMember = async (): Promise<void> => {
            try {
                const response: AxiosResponse<IMemberCard> = await axiosInstance.get(``);

                setData(response.data);
            } catch (error) {
                throw new Error();
            }
        };
        getMember();
    }, []);

    return (
        <div className={styles.scramMaster}>
            <p>Scram master:</p>
            {data ? (
                <MemberCard
                    firstName={data.firstName}
                    lastName={data.lastName}
                    job={data.job}
                    image={data.image}
                    id="dfxx"
                />
            ) : (
                'download'
            )}
        </div>
    );
};

export default ScramMaster;
