import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../api/memberInfo';
import styles from './ScramMaster.module.css';
import { IUserCard } from '../../types';
import { UserCard } from '../UserCard';

const ScramMaster: () => JSX.Element = () => {
    const [data, setData] = useState<IUserCard>();

    useEffect(() => {
        const getMember = async (): Promise<void> => {
            try {
                const response: AxiosResponse<IUserCard> = await axiosInstance.get(``);

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
                <UserCard
                    initials={data.initials}
                    name={data.name}
                    position={data.position}
                    kickID={data.kickID}
                    currentUser={data.currentUser}
                />
            ) : (
                'download'
            )}
        </div>
    );
};

export default ScramMaster;
