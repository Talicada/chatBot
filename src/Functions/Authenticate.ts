import { ClientCredentialsAuthProvider } from '@twurple/auth';
import dotenv from 'dotenv';
require('dotenv').config();

export default async function auth() {
	const clientId = process.env.twClientID as string;
	const clientSecret = process.env.twSecretKey as string;


	const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
	var getAccessToken = await authProvider.getAccessToken();
	var accessToken = getAccessToken?.accessToken;
	return accessToken
}
