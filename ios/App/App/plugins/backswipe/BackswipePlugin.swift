//
//  BackswipePlugin.swift
//  App
//
//  Created by SongJeongHyeon on 3/13/24.
//

import Foundation
import Capacitor

@objc(BackswipePlugin)
public class BackswipePlugin: CAPPlugin {
   
    override public func load() {
        bridge?.webView?.allowsBackForwardNavigationGestures = true;
    }
}
