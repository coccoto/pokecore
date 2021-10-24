import React from 'react'
// molecules
import BaseStatsFields from '@src/app/components/molecules/baseStatsFields'
import CurrentStatsFields from '@src/app/components/molecules/currentStatsFields'
import EffortValuesFields from '@src/app/components/molecules/effortValuesFields'
import IndividualValuesFields from '@src/app/components/molecules/individualValuesFields'
import SurfaceFields from '@src/app/components/molecules/surfaceFields'

export default (): JSX.Element => {

    return (
        <div>
            <div>
                <SurfaceFields></SurfaceFields>
            </div>
            <div>
                <BaseStatsFields></BaseStatsFields>
                <CurrentStatsFields></CurrentStatsFields>
                <EffortValuesFields></EffortValuesFields>
                <IndividualValuesFields></IndividualValuesFields>
            </div>
        </div>
    )
}