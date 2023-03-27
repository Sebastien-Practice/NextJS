import { CardContent, Typography } from "@mui/material";
import React from "react";

const CoffeeCard = (props: string) => {

    return(
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    
                    </Typography>
                </CardContent>
            </React.Fragment>
          );
}

export default CoffeeCard;