import dva from 'dva';
import './index.css';
import './models/list';

const app = dva();
// 3. Model
app.model(require('./models/list').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
