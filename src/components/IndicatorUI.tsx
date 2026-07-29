import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IndicatorUIProps {
    title: string;
    value: string;
}

export default function IndicatorUI(props: IndicatorUIProps) {
    return (
        <Card>
            <CardContent sx={{ height: '100%' }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.value}
                </Typography>
            </CardContent>
        </Card>
    )
}