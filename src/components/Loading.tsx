import { Center, Spinner } from "native-base"

export const Loading = () => {
    return (
        <Center flex={1} bg='gray.6'>
            <Spinner color='blue.default'/>
        </Center>
    )
}