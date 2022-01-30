import { Card, CardHeader, CardBody, CardFooter } from "grommet";

export const ItemCard = (props) => {
    return (
        <Card height="auto" width="small" background="light-1" margin='small' border="all" >
            <CardHeader pad="small">
                title
            </CardHeader>
            <CardBody pad="large">
                body
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }}>
                footer
            </CardFooter>
        </Card>
    );
};