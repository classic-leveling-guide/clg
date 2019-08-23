--- LibDeflate usage example
-- @author Haoqian He
-- @file example.lua

local LibDeflate

if LibStub then -- You are using LibDeflate as WoW addon
	LibDeflate = LibStub:GetLibrary("LibDeflate")
else
	-- You are using LibDeflate as Lua library.
	-- Setup the path to locate LibDeflate.lua,
	-- if 'require("LibDeflate")' fails, for example:
	-- package.path = ("?.lua;../?.lua;")..(package.path or "")
	LibDeflate = require("LibDeflate")
end

local example_input = "hi hello world"

-- Compress using raw deflate format
local compress_deflate = LibDeflate:CompressDeflate(example_input)

-- decompress
local decompress_deflate = LibDeflate:DecompressDeflate(compress_deflate)
-- Check if the first return value of DecompressXXXX is non-nil to know if the
-- decompression succeeds.
if decompress_deflate == nil then
	print("Decompression fails.")
else
	-- Decompression succeeds.
	print(decompress_deflate)
end


-- If it is to transmit through WoW addon channel,
-- compressed data must be encoded so NULL ("\000") is not transmitted.
local data_to_trasmit_WoW_addon = LibDeflate:EncodeForWoWAddonChannel(
	compress_deflate)
-- When the receiver gets the data, decoded it first.
local data_decoded_WoW_addon = LibDeflate:DecodeForWoWAddonChannel(
	data_to_trasmit_WoW_addon)
-- Then decomrpess it
print(LibDeflate:DecompressDeflate(data_decoded_WoW_addon))

-- The compressed output is not printable. EncodeForPrint will convert to
-- a printable format, in case you want to export to the user to
-- copy and paste. This encoding will make the data 25% bigger.
local printable_compressed = LibDeflate:EncodeForPrint(compress_deflate)

-- DecodeForPrint to convert back.
-- DecodeForPrint will remove prefixed and trailing control or space characters
-- in the string before decode it.
assert(LibDeflate:DecodeForPrint(printable_compressed) == compress_deflate)


