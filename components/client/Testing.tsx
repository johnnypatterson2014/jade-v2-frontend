'use client';

import Image from 'next/image';
import Button from '@/components/client/Button'
import React, { useState, useEffect } from 'react';

const Testing = () => {
    const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
    const [apiResponse, setApiResponse] = useState<string>('')

    const getApiResponseAction = async (e?: any) => {
        e?.preventDefault();
        setIsLoadingAnswer(true);
        try {
            const response = await fetch('/api/graph', {
                method: 'GET'
            })
            const imageBuffer = await response.arrayBuffer();
            const base64 = Buffer.from(imageBuffer).toString('base64');
            const pngString = "data:image/*;base64," + base64
            setApiResponse(pngString)
        } catch (error) {
            console.log('error in getTestResponse.');
            console.log(error)
        } finally {
            setIsLoadingAnswer(false)
        }

    }


    return (
        <>
            <div>
                <Button>
                    <a onClick={() => getApiResponseAction()}>call python backend to generate a graph</a>
                </Button>

            </div>

            {isLoadingAnswer && (
                <div className='m-[20px]'><h2>Loading...</h2></div>
            )
            }

            {!isLoadingAnswer && apiResponse && apiResponse.length > 0 && (
                <div className='m-[20px]'>
                    <img src={apiResponse} width={640} alt="" />
                </div>
            )
            }
        </>
    )
}

export default Testing