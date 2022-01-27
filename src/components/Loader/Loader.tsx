import { Box } from "@chakra-ui/react";
import Image from "next/image";
import loading from '../../assets/images/loading.gif';

export function Loader({width = 200, height = 200}) {
    return (
        <div>
            <Box sx={{color: '#FFF', textAlign: 'center'}}>
                <Image src={loading} width={width} height={height} alt="Loading" />
                <p>Loading...</p>
            </Box>
        </div>
    );
}