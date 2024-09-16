import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h2" gutterBottom>
                    本サイトについて
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mt: '2em' }}>
                    本サイトについて
                </Typography>
                <p>本サイトは、みんなで競馬を楽しむことを目的としています。<br />
                    勝ち負けだけだはなく、様々な楽しみを提供できればと考えています。<br />
                    不備等ありましたら、お手数ではございますが、お問い合わせをお願い致します。
                </p>

                <Typography variant="h6" gutterBottom sx={{ mt: '2em' }}>
                    【利用規約について】
                </Typography>

                <ol>
                    <li>当サイトが提供するサービス及び掲載内容についてはいかなる保証も行いません。</li>
                    <li>当サイト及び当サイトからリンクされているサイトを利用したことにより発生したいかなるトラブル、損失、損害などについて一切の責任や義務を負いません。</li>
                    <li>掲載内容の不備、誤りがあった場合にも、それによって生じたいかなるトラブル、損害、損失などについても一切の責任や義務を負いません。</li>
                    <li>当サイトに掲載される情報は、予告なしに変更される場合があります。御了承ください。</li>
                    <li>当サイトの情報は、ユーザーの意思に関係なく、管理者により書き込み等の内容を一部または全てを編集することがございます。</li>
                </ol>

                <Typography variant='h6' gutterBottom sx={{ mt: '2em' }}>
                    【書き込み内容の変更・削除基準について】
                </Typography>
                <ol>
                    <li>名誉棄損、誹謗中傷となる書き込み<br />※相手を尊重するよう注意が必要です。</li>
                    <li>性的な表現を含む書き込み</li>
                    <li>個人を特定するような書き込み</li>
                    <li>主旨不明の不必要と判断される書き込み</li>
                    <li>宣伝目的の書き込み</li>
                    <li>当サイトが不適切とみなした書き込み</li>
                </ol>

                <Typography variant='h6' gutterBottom sx={{ mt: '2em' }}>
                    【アクセスログについて】
                </Typography>
                <p>
                    当サイトでは、統計的なサイト利用情報を、個人特定情報の収集のために利用することはありません。
                </p>
            </Grid>
        </Grid>
    );
}