#!/bin/bash

jarsigner=/usr/java/latest/bin/jarsigner
keytool=/usr/java/latest/bin/keytool
zipalign=~/android-sdk-linux/build-tools/20.0.0/zipalign

unsigned_unalign_release_apk="${1}"

$keytool -genkey -v -keystore ~/.android/release.keystore -alias androidreleasekey -storepass android -keypass android -keyalg RSA -validity 14000

$jarsigner -sigalg MD5withRSA -digestalg SHA1 -keystore release.keystore -signedjar release-signed-unalign.apk  "${unsigned_unalign_release_apk}" androidreleasekey

$zipalign -v -f 4  release-signed-unalign.apk "${2}"

