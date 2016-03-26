
loadAPI(1);

host.defineController("Hercules", "DJConsole Rmx2", "1.0", "f8eabb4e-5c67-4146-8747-35e6ba3f408e");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["DJConsole Rmx2 MIDI 1"], ["DJConsole Rmx2 MIDI 1"]);

function init()
{
	host.getMidiInPort(0).setMidiCallback(onMidi);
	host.getMidiInPort(0).setSysexCallback(onSysex);
}

function exit()
{
}

function onMidi(status, data1, data2)
{
}

function onSysex(data)
{
}
