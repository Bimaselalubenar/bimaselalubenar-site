import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SetMenu from './views/set-menu'
import PengaturanIklanFacebookMulai50RibuRupiah from './views/pengaturan-iklan-facebook-mulai-50-ribu-rupiah'
import UntukNonik from './views/untuk-nonik'
import SoftwareStore from './views/software-store'
import Materisocmed from './views/materisocmed'
import CetakBuktiPembayaranFBADS from './views/cetak-bukti-pembayaran-fb-ads'
import Home from './views/home'
import AsetPribadi from './views/aset-pribadi'
import Eror from './views/eror'
import AHASSHONDASERVICEPROTECTION from './views/ahass-honda-service-protection'
import SuksesKirim from './views/sukses-kirim'
import Portofolio from './views/portofolio'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SetMenu} exact path="/set-menu" />
        <Route
          component={PengaturanIklanFacebookMulai50RibuRupiah}
          exact
          path="/pengaturan-iklan-facebook-mulai-50-ribu-rupiah"
        />
        <Route component={UntukNonik} exact path="/untuk-nonik" />
        <Route component={SoftwareStore} exact path="/software-store" />
        <Route component={Materisocmed} exact path="/materisocmed" />
        <Route
          component={CetakBuktiPembayaranFBADS}
          exact
          path="/cetak-bukti-pembayaran-fb-ads"
        />
        <Route component={Home} exact path="/" />
        <Route component={AsetPribadi} exact path="/aset-pribadi" />
        <Route component={Eror} path="**" />
        <Route
          component={AHASSHONDASERVICEPROTECTION}
          exact
          path="/ahass-honda-service-protection"
        />
        <Route component={SuksesKirim} exact path="/sukses-kirim" />
        <Route component={Portofolio} exact path="/portofolio" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
