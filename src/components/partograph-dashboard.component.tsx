import { ExtensionSlot } from '@openmrs/esm-framework';
import React from 'react';

const PartographDashboard: React.FC = () => {
    return (
        <>
            <div>Partograph</div>
            <ExtensionSlot name='partograph-chart-slot' state={{ hello: "Hello there" }} />
        </>
    );
}

export default PartographDashboard;