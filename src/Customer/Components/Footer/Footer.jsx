import { Button} from "@mui/base";
import { Typography, Grid,Link} from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center at-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              press
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item sx={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy;2023 My Company.All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made with love by me
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Icons Made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="alwqays">
                Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www/flaticon.com/" color="inherit" underline="always">
                www.flaticon.com
            </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
