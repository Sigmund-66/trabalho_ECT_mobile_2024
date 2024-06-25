import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Tela2 from './Tela2';
import Tela3 from './Tela3';

export default function _Drawer() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Tela2" component={Tela2} />
                <Drawer.Screen name="Tela3" component={Tela3} />
            </Drawer.Navigator>
        );
}

