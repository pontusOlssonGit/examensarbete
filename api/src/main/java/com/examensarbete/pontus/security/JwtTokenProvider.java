package com.examensarbete.pontus.security;

import static com.examensarbete.pontus.security.SecurityConstants.SECRET_KEY;
import static com.examensarbete.pontus.security.SecurityConstants.TOKEN_EXPIRATION_TIME;


import com.examensarbete.pontus.model.User;
import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider {

    public String generateToken(Authentication authentication){
        User user = (User)authentication.getPrincipal();
        Date issuedAt = new Date(System.currentTimeMillis());
        Date expiration = new Date(issuedAt.getTime()+TOKEN_EXPIRATION_TIME);
        String userId = Long.toString(user.getId());

        Map<String, Object> claims = new HashMap<>();
        claims.put("id", (Long.toString(user.getId())));
        claims.put("username",(user.getUsername()));
        claims.put("fullName",(user.getFullName()));

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(issuedAt)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS512,SECRET_KEY)
                .compact();
    }
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (SignatureException signatureException) {
            System.out.println("Invalid JWT SIGNATURE");
        } catch (MalformedJwtException malformedException) {
            System.out.println("Invalid JWT Token");
        } catch (ExpiredJwtException expiredException) {
            System.out.println("Expired JWT Token");
        } catch (UnsupportedJwtException unsupportedException) {
            System.out.println("Unsupported JWT Token");
        } catch (IllegalArgumentException illegalArgumentException) {
            System.out.println("JWT claims string is empty");
        }
        return false;
    }

    public Long getUserIdFromToken(String token){
        Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
        String id = (String)claims.get("id");
        return Long.parseLong(id);
    }
}
