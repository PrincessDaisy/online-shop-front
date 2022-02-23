/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import { ManagerCartType } from '../../types';
import ManagerArmItem from './ManagerArmItem';

type ManagerArmProps = {
    managerCartData: ManagerCartType,
    deliverOrder: () => {}
};

const Arm = styled.div`
    width: 900px;
    margin: 0 auto;
`;

const ManagerArm: React.FC<any> = ({ managerCartData, deliverOrder }: ManagerArmProps ) => {
    return (
        <Arm>
            {managerCartData.map(item => <ManagerArmItem {...item} deliverOrder={deliverOrder} />)}
        </Arm>
    )
};

export default ManagerArm;