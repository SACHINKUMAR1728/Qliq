import React from 'react'
import { OktoProvider, BuildType } from 'okto-sdk-react';
import Okto from '../components/Okto';

const login = () => {
    const OKTO_CLIENT_API_KEY = "3d93c785-68e4-48d7-81a8-25bc3e638793";
  return (
    <>
    <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
    <Okto/>
    </OktoProvider>
    </>
  )
}

export default login