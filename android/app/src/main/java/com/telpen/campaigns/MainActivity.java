package com.telpen.campaigns;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import ch.byrds.capacitor.contacts.Contacts;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(Contacts.class);
    }

}
