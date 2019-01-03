import { IDevice } from "./device";
import { DeviceType } from "./enums";
export declare class IOSController {
    private static XCRUN;
    private static SIMCTL;
    private static XCRUN_SIMCTL_LIST_COMMAND;
    private static XCRUNLISTDEVICES_COMMAND;
    private static GET_BOOTED_DEVICES_COMMAND;
    private static OSASCRIPT_QUIT_SIMULATOR_COMMAND;
    private static IOS_DEVICE;
    private static devicesScreenInfo;
    private static DEVICE_BOOT_TIME;
    private static WAIT_DEVICE_TO_RESPONSE;
    private static _dl;
    static getDl(): Promise<any>;
    static disposeDL(): void;
    static runningProcesses: any[];
    static getAllDevices(verbose?: boolean): Promise<Map<string, Array<IDevice>>>;
    static getSimulatorPidByToken(token: string): any;
    static deleteDevice(token: string): void;
    static fullResetOfSimulator(simulator: IDevice): IDevice;
    static startSimulator(simulator: IDevice, directory?: string, shouldFullResetSimulator?: boolean, retries?: number): Promise<IDevice>;
    static restartDevice(device: IDevice): Promise<void>;
    static killAll(): void;
    static kill(udid: string): Promise<void>;
    static getInstalledApps(device: IDevice): any[];
    static installApp(device: IDevice, fullAppName: any): Promise<void>;
    /**
    * @param device - of type {token: string, type: DeviceType}
    * @param bundleId - should be provided when DeviceType.DEVICE else undefined
    * @param appName - should be provided when DeviceType.SIMULATOR else undefined
    **/
    static stopApplication(device: IDevice, bundleId: string, appName: string): Promise<boolean>;
    static uninstallApp(device: IDevice, fullAppName: string, bundleId?: string): Promise<void>;
    static reinstallApplication(device: IDevice, fullAppName: any, bundleId?: string): Promise<void>;
    static refreshApplication(device: IDevice, fullAppName: any, bundleId?: string): Promise<void>;
    static startApplication(device: IDevice, fullAppName: any, bundleId?: string): Promise<{
        output: string;
        result: boolean;
    }>;
    private static startSimulatorProcess;
    private static isRunning;
    static parseSimulators(stdout?: any): Map<string, Array<IDevice>>;
    static parseRealDevices(devices?: Map<string, IDevice[]>): Map<string, IDevice[]>;
    static getSimLocation(token: any): string;
    static filterDeviceBy(...args: any[]): IDevice[];
    static getScreenshot(device: IDevice, dir: any, fileName: any): Promise<string>;
    static recordVideo(device: IDevice, dir: any, fileName: any, callback: () => Promise<any>): Promise<any>;
    static startRecordingVideo(device: IDevice, dir: any, fileName: any): {
        pathToVideo: string;
        videoRecoringProcess: any;
    };
    private static checkIfSimulatorIsBooted;
    static getIOSPackageId(deviceType: DeviceType, fullAppName: any): string;
    static getDevicesScreenInfo(): Map<string, IOSDeviceScreenInfo>;
    /**
     * Get path of Info.plist of iOS app under test.
     * Info.plist holds information for app under test.
     *
     * @return path to Info.plist
     */
    private static getPlistPath;
    private static waitForBootInSystemLog;
    private static tailLogsUntil;
    static getLogDir(token: any): string;
    private static loadIOSDevicesScreenInfo;
}
export interface IOSDeviceScreenInfo {
    deviceType: any;
    width: any;
    height: any;
    density: any;
    actionBarHeight: any;
}
