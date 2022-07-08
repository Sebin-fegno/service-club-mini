import { View, Text } from 'react-native'
import React from 'react'
import axios from "axios";

const baseURL = "https://miniserviceclub.dev.fegno.com/api/v1/";
export const hhtp = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });