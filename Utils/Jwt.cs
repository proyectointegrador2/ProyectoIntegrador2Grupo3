
using System.IdentityModel.Tokens.Jwt;

namespace SistemaDeInventarioDeVentaDeVehiculos.Utils;

public class Jwt
{
    public string Key { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public string Subject { get; set; }

    public bool IsTokenExpired(string token)
    {
        if(string.IsNullOrWhiteSpace(token)) return true;

        var jwtTokenHandle = new JwtSecurityTokenHandler();
        var jwtToken = jwtTokenHandle.ReadJwtToken(token);
        var exp = jwtToken.Payload.Exp;

        var secondsSinceEpoch = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

        return exp < secondsSinceEpoch;
    }
}

