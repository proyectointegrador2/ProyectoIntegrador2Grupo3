
using Microsoft.Extensions.Configuration;
using CloudinaryDotNet;

public class CloudinaryService
{
    private readonly IConfiguration _config;

    public CloudinaryService(IConfiguration config)
    {
        _config = config;
    }

    public Account GetAccount()
    {
        var cloudinary = _config.GetSection("Cloudinary");

        string cloudName = cloudinary.GetValue<string>("CloudName");
        string apiKey = cloudinary.GetValue<string>("ApiKey");
        string apiSecret = cloudinary.GetValue<string>("ApiSecret");

        var account = new Account(cloudName, apiKey, apiSecret);

        return account;
    }
}